class DateTools {
  TimeFormat = (time: string | number) => {
    const db = new Date(time),
      y = db.getFullYear(),
      m = db.getMonth() > 9 ? db.getMonth() : "0" + db.getMonth(),
      d = db.getDate() > 9 ? db.getDate() : "0" + db.getDate(),
      h = db.getHours() > 9 ? db.getHours() : "0" + db.getHours(),
      i = db.getSeconds() > 9 ? db.getSeconds() : "0" + db.getSeconds(),
      s = db.getMinutes() > 9 ? db.getMinutes() : "0" + db.getMinutes();
    return `${y}-${m}-${d} ${h}:${i}:${s}`;
  };
}

export default new DateTools();
