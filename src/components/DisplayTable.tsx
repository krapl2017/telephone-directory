import { TableItem, TableData } from "../interfaces";
  
// Компонент для отображения строки раздела
const SectionRow: React.FC<{ name: string; level: number }> = ({ name, level }) => (
    <tr>
        <td colSpan={5}>
        <div style={{ float: "left" }}>
            <h4>
            {Array(level).fill(0).map((_, i) => (
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
  
// Компонент для отображения строки с данными человека
const PersonRow: React.FC<{ person: TableItem }> = ({ person }) => (
    <tr>
        <td>{person.jobTitle}</td>
        <td>{person.name}</td>
        <td>{person.phone}</td>
        <td>{person.email}</td>
        <td>{person.address}</td>
    </tr>
);
  
  // Основной компонент таблицы
const TableComponent: React.FC<{ data: TableData }> = ({ data }) => {
    // Создаем словарь для быстрого доступа к элементам
    const itemsMap = new Map<string, TableItem>(data.items.map(item => [item.id, item]));
    
    // Функция для вычисления уровня вложенности
    const getItemLevel = (item: TableItem): number => {
      if (!item.fatherId) return 0;
      const father = itemsMap.get(item.fatherId);
      return father ? getItemLevel(father) + 1 : 0;
    };
  
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
            if (!item.jobTitle) {
              // Это раздел
              return (
                <SectionRow
                  key={item.id}
                  name={item.name || ""}
                  level={getItemLevel(item)}
                />
              );
            }
            // Это человек
            return <PersonRow key={item.id} person={item} />;
          })}
        </tbody>
      </table>
    );
};

export default TableComponent;
  
  // Пример использования (предполагается, что данные загружаются через import)
  // import data from './file.json';
  // <TableComponent data={data} />