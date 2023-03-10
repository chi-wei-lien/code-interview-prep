class Status {
  public id;
  public value;
  public userId;
  public color;

  constructor(id: number, value: string, userId: number, color: string) {
    this.id = id;
    this.value = value;
    this.userId = userId;
    this.color = color;
  }

  static getStatusesMap = async (): Promise<Map<number, Status>> => {
    const fetchedStatusesMap: Map<number, Status> = new Map();
    return new Promise(async (resolve, reject) => {
      await fetch(`${process.env.REACT_APP_API}/status`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          for (const status of response.statuses) {
            fetchedStatusesMap.set(
              status.id,
              new Status(
                status.id,
                status.value,
                status.userId,
                `#${status.color}`
              )
            );
          }
          resolve(fetchedStatusesMap);
        })
        .catch((err) => reject(err));
    });
  };

  static addStatus = async (value: string) => {
    await fetch(`${process.env.REACT_APP_API}/status`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  static removeStatus = async (value: string) => {
    await fetch(`${process.env.REACT_APP_API}/status`, {
      method: "DELETE",
      credentials: "include",
      body: JSON.stringify({
        value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
}

export default Status;
