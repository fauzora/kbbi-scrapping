export class ResponseModel {
  public status: boolean = false;
  public message: string = "";
  public data: object = {};
  public copyright: string =
    "Copyright © 2022 Chairil Fauzi Firmansyah. All Rights Reserved.";

  constructor(status: boolean, message: string, data: object) {
    this.status = status;
    this.message = message;
    this.data = data;
  }
}
