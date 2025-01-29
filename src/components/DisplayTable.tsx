import { TableItem, TableData } from "../interfaces";
  
const SectionRow: React.FC<{ name: string; level: number }> = ({ name, level }) => (
    <tr>
        <td colSpan={5}>
            <div style={{ float: "left" }}>
                <h4>
                {Array(level-1).fill(0).map((_, i) => (
                    <span 
                    key={i}
                    style={{ display: "inline-block", width: "60px" }}
                    />
                ))}
                {name}
                </h4>
            </div>
        </td>
    </tr>
);

const PersonRow: React.FC<{ person: TableItem }> = ({ person }) => (
    <tr>
        <td>{person.jobTitle}</td>
        <td>{person.name}</td>
        <td>{person.phone}</td>
        <td>{person.email}</td>
        <td>{person.address}</td>
    </tr>
);
  
const DisplayTable: React.FC<{ data: TableData }> = ({ data }) => {
  
    return (
      <table>
        <thead>
          <tr>
            <th>Должность</th>
            <th>ФИО</th>
            <th>Телефон</th>
            <th>e-mail</th>
            <th>Адрес</th>
          </tr>
        </thead>
        <tbody>
          {data.items.map(item => {
            if (item.type === "0") return <PersonRow key={item.id} person={item} />;
            return (
                <SectionRow
                    key={item.id}
                    name={item.name || ""}
                    level={Number(item.type)}
                />
            );
          })}
        </tbody>
      </table>
    );
};

export default DisplayTable;

// 0 - человек
// всё что не 0, объединение столбцов
// 1 - 0 отступ
// 2 - 1 отступ
// ...
// n - n-1 отступ

// если 2 два объекта относятся к одному разделу .fatherId === .fatherId, то раньше идёт с type 0