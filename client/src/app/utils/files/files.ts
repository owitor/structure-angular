import * as moment from "moment";

export function downloadAction(url: any, name: any): void {
  const link = document.createElement("a");
  link.href = url;
  link.download = name;
  link.click();
  link.remove();
}

export function exportJsonToCsv(data: any[]): void {
  const replacer = (key: any, value: any) => (value === null ? "" : value); // specify how you want to handle null values here
  const header = Object.keys(data[0]);
  const csv = data.map(row => header
    .map(fieldName => JSON.stringify(row[fieldName], replacer))
    .join(",")
  );
  csv.unshift(header.join(","));
  const csvArray = csv.join("\r\n");
  const blob = new Blob([csvArray], { type: "text/csv" });
  const name = `leads-${moment().format("YYYY-MM-DDThh_mm_ss")}`;
  downloadAction(window.URL.createObjectURL(blob), name);
}

export function downloadJson(object: any, name:string) {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(object));
  const fileName = `${name} - ${moment().format('YYYY-MM-DD HH:mm')}.json`;
  downloadAction(dataStr, fileName);
}
