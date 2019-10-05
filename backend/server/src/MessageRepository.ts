import config from 'config';
import mysql, { MysqlError } from 'mysql';
import * as message_service_pb from './proto/MessageService_pb';

interface IMessageRowDataPacket {
  id: number;
  text: string;
  create_time: number;
  author_name: string;
}

interface IMessageList {
  messages: message_service_pb.Message[];
  lastId: number;
}

class MessageRepository {
  private static readonly NUM_MESSAGES_IN_PAGE = 50;

  private static readonly FIND_BY_ID_RANGE_QUERY = `
    SELECT
      id, text, create_time, author_name
    FROM
      messages
    WHERE
      id <= ?
    ORDER BY
      id DESC
    LIMIT ${MessageRepository.NUM_MESSAGES_IN_PAGE + 1};
  `;

  private static readonly FIND_LATEST_QUERY = `
    SELECT
      id, text, create_time, author_name
    FROM
      messages
    ORDER BY
      id DESC
    LIMIT ${MessageRepository.NUM_MESSAGES_IN_PAGE + 1};
  `;

  private static readonly SAVE_QUERY = `
    INSERT INTO
      messages (text, create_time, author_name)
    VALUES
      (?, ?, ?);
  `;

  private readonly pool = mysql.createPool({
    database: 'backend',
    password: process.env.MYSQL_PASSWORD,
    user: process.env.MYSQL_USER,
  });

  public findLatest(): Promise<IMessageList> {
    return new Promise((resolve, reject) => {
      this.pool.query(
        MessageRepository.FIND_LATEST_QUERY,
        (err: MysqlError | null, results: IMessageRowDataPacket[]) => {
          if (err) {
            reject(err);
            return;
          }
          if (results.length === MessageRepository.NUM_MESSAGES_IN_PAGE + 1) {
            resolve({
              lastId: results[results.length - 1].id,
              messages: results.map(result => this.convertMessageRowToProto(result)).slice(0, -1),
            });
          } else {
            resolve({
              lastId: -1,
              messages: results.map(result => this.convertMessageRowToProto(result)),
            });
          }
        }
      );
    });
  }

  public findByIdRange(startId: number): Promise<IMessageList> {
    return new Promise((resolve, reject) => {
      this.pool.query(
        MessageRepository.FIND_BY_ID_RANGE_QUERY,
        startId,
        (err: MysqlError | null, results: IMessageRowDataPacket[]) => {
          if (err) {
            reject(err);
            return;
          }
          if (results.length === MessageRepository.NUM_MESSAGES_IN_PAGE + 1) {
            resolve({
              lastId: results[results.length - 1].id,
              messages: results.map(result => this.convertMessageRowToProto(result)).slice(0, -1),
            });
          } else {
            resolve({
              lastId: -1,
              messages: results.map(result => this.convertMessageRowToProto(result)),
            });
          }
        }
      );
    });
  }

  public save(request: message_service_pb.Message): Promise<any> {
    return new Promise((resolve, reject) => {
      this.pool.query(
        MessageRepository.SAVE_QUERY,
        [request.getText(), request.getCreateTime(), request.getAuthorName()],
        (err: MysqlError | null, results: any) => {
          if (err) {
            reject(err);
            return;
          }
          resolve(results);
        }
      );
    });
  }

  private convertMessageRowToProto(messageRow: IMessageRowDataPacket): message_service_pb.Message {
    const message = new message_service_pb.Message();
    message.setText(messageRow.text);
    message.setCreateTime(messageRow.create_time);
    message.setAuthorName(messageRow.author_name);
    return message;
  }
}

export default MessageRepository;
