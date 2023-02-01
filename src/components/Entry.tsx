export default function Entry(entries: any) {
    console.log(entries.entry.created + " " + entries.entry.preview)

    let isoDate = entries.entry.created;
    var d = new Date(isoDate);
        

    return (
      <div>
        <div>{entries.entry.preview}</div>
        <div>{d.toLocaleDateString('en-GB') +" "+ d.toLocaleTimeString()} </div>
      </div>
    )
}