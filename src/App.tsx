import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <table border={1}>
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
          <tr>
            <td colSpan={5}>
              <div style={{float: "left"}}>
                <h4>Институт математических и информационных систем</h4> {/*Раздел 0, значит 0 отступов */}
              </div>
            </td>
          </tr>
          <tr>
            <td>Директор, к.т.н., доцент</td>
            <td>Чистяков Геннадий Андреевич</td>
            <td>8(8332)742-410</td>
            <td>tchistyakov@vyatsu.ru</td>
            <td>610000, г. Киров, ул. Московская, д. 39, каб. 2-204</td>
          </tr>
          <td colSpan={5}>
              <div style={{float: "left"}}>
                <h4>
                  <span style={{display: "inline-block", width: "30px"}}></span>
                  Факультет автоматики и вычислительной техники
                </h4> {/*Раздел 1 вложен в раздел 0, поэтому 1 табуляция в виде span*/}
              </div>
            </td>
          <tr>
            <td>И.о. декана, к.т.н.</td>
            <td>Репкин Дмитрий Александрович</td>
            <td>8 (8332) 74-25-10, 742-880 (деканат)</td>
            <td>repkin@vyatsu.ru</td>
            <td>610000, г. Киров, ул. Московская , д. 39, каб 200</td>
          </tr>
          <td colSpan={5}>
              <div style={{float: "left"}}>
                <h4>
                  <span style={{display: "inline-block", width: "30px"}}></span>
                  <span style={{display: "inline-block", width: "30px"}}></span>
                  Кафедра систем автоматизации управления
                </h4> {/*Раздел 2 вложен в раздел 1, поэтому 2 табуляция в виде span*/}
              </div>
          </td>
          <tr>
            <td>И.о. завкафедрой, к.т.н.</td>
            <td>Сандаков Сергей Юрьевич</td>
            <td>8 (8332) 742-415, 742-416 (каф.)</td>
            <td>syu_sandakov@vyatsu.ru</td>
            <td>610000, г. Киров, ул. Московская, д.39</td>
          </tr>
          <td colSpan={5}>
              <div style={{float: "left"}}>
                <h4>
                  <span style={{display: "inline-block", width: "30px"}}></span>
                  <span style={{display: "inline-block", width: "30px"}}></span>
                  Кафедра электронных вычислительных машин
                </h4> {/*Раздел 2 вложен в раздел 1, поэтому 2 табуляция в виде span*/}
              </div>
          </td>
          <tr>
            <td>Завкафедрой, доцент, канд. техн. наук</td>
            <td>Долженкова Мария Львовна</td>
            <td>8 (8332) 742-420, 742-421 (каф.)</td>
            <td>maryd@vyatsu.ru</td>
            <td>610000, г. Киров, ул. Московская, д. 39</td>
          </tr>
          <td colSpan={5}>
              <div style={{float: "left"}}>
                <h4>
                  <span style={{display: "inline-block", width: "30px"}}></span>
                  <span style={{display: "inline-block", width: "30px"}}></span>
                  Кафедра радиоэлектронных средств
                </h4> {/*Раздел 2 вложен в раздел 1, поэтому 2 табуляция в виде span*/}
              </div>
          </td>
          <tr>
            <td>И.о. завкафедрой, доцент, канд. техн. наук, доцент кафедры</td>
            <td>Харина Наталья Леонидовна</td>
            <td>8 (8332) 742-525, 742-526 (каф.)</td>
            <td>harina@vyatsu.ru</td>
            <td>610000, г. Киров, ул. Московская, д. 29</td>
          </tr>
        </tbody>
      </table>

      <ul>
        <li>
          <h2>Институт математики и информационных систем</h2>
          <ul>
            <li>
              <h3>Факультет компьютерных и физико-математических наук</h3>
              <ul>
                <h4>Кафедра прикладной математики и информатики</h4>
              </ul>
            </li>
            <li>
              <h3>Факультет автоматики и вычислительной техники</h3>
              <ul>
                <h4>Кафедра </h4>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
