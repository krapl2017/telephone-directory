import './App.css'
import TableComponent from './components/DisplayTable'
import data from './ExampleData.json'

function App() {

  return (
    <>
      <TableComponent data={data} />

      `<table>
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
          <tr>
            <td colSpan={5}>
              <div style={{float: "left"}}>
                <h4>
                  <span style={{display: "inline-block", width: "60px"}}></span>
                  Факультет автоматики и вычислительной техники
                </h4> {/*Раздел 1 относится к разделу 0, поэтому 1 табуляция в виде span*/}
              </div>
            </td>
          </tr>
          <tr>
            <td>И.о. декана, к.т.н.</td>
            <td>Репкин Дмитрий Александрович</td>
            <td>8 (8332) 74-25-10, 742-880 (деканат)</td>
            <td>repkin@vyatsu.ru</td>
            <td>610000, г. Киров, ул. Московская , д. 39, каб 200</td>
          </tr>
          <tr>
            <td colSpan={5}>
                <div style={{float: "left"}}>
                  <h4>
                    <span style={{display: "inline-block", width: "60px"}}></span>
                    <span style={{display: "inline-block", width: "60px"}}></span>
                    Кафедра систем автоматизации управления
                  </h4> {/*Раздел 2 относится к разделу 1, поэтому 2 табуляция в виде span*/}
                </div>
            </td>
          </tr>
          <tr>
            <td>И.о. завкафедрой, к.т.н.</td>
            <td>Сандаков Сергей Юрьевич</td>
            <td>8 (8332) 742-415, 742-416 (каф.)</td>
            <td>syu_sandakov@vyatsu.ru</td>
            <td>610000, г. Киров, ул. Московская, д.39</td>
          </tr>
          <tr>
            <td colSpan={5}>
                <div style={{float: "left"}}>
                  <h4>
                    <span style={{display: "inline-block", width: "60px"}}></span>
                    <span style={{display: "inline-block", width: "60px"}}></span>
                    Кафедра электронных вычислительных машин
                  </h4> {/*Раздел 2 относится к разделу 1, поэтому 2 табуляция в виде span*/}
                </div>
            </td>
          </tr>
          <tr>
            <td>Завкафедрой, доцент, канд. техн. наук</td>
            <td>Долженкова Мария Львовна</td>
            <td>8 (8332) 742-420, 742-421 (каф.)</td>
            <td>maryd@vyatsu.ru</td>
            <td>610000, г. Киров, ул. Московская, д. 39</td>
          </tr>
          <tr>
            <td colSpan={5}>
                <div style={{float: "left"}}>
                  <h4>
                    <span style={{display: "inline-block", width: "60px"}}></span>
                    <span style={{display: "inline-block", width: "60px"}}></span>
                    Кафедра радиоэлектронных средств
                  </h4> {/*Раздел 2 относится к разделу 1, поэтому 2 табуляция в виде span*/}
                </div>
            </td>
          </tr>
          <tr>
            <td>И.о. завкафедрой, доцент, канд. техн. наук, доцент кафедры</td>
            <td>Харина Наталья Леонидовна</td>
            <td>8 (8332) 742-525, 742-526 (каф.)</td>
            <td>harina@vyatsu.ru</td>
            <td>610000, г. Киров, ул. Московская, д. 29</td>
          </tr>
          <tr>
            <td colSpan={5}>
              <div style={{float: "left"}}>
                <h4>
                  <span style={{display: "inline-block", width: "60px"}}></span>
                  Факультет компьютерных и физико-математических наук
                </h4> {/*Раздел 1 относится к разделу 0, поэтому 1 табуляция в виде span*/}
              </div>
            </td>
          </tr>
          <tr>
            <td>Декан, канд. пед. наук, доцент</td>
            <td>Бояринцева Наталья Александровна</td>
            <td>8 (8332) 742-412, 208-961 (деканат)</td>
            <td>na_bushmeleva@vyatsu.ru</td>
            <td>610002, Кировская область, г. Киров, ул. Ленина, д. 111, каб. 236</td>
          </tr>
          <tr>
            <td colSpan={5}>
                <div style={{float: "left"}}>
                  <h4>
                    <span style={{display: "inline-block", width: "60px"}}></span>
                    <span style={{display: "inline-block", width: "60px"}}></span>
                    Кафедра цифровых технологий в образовании
                  </h4> {/*Раздел 2 относится к разделу 1, поэтому 2 табуляция в виде span*/}
                </div>
            </td>
          </tr>
          <tr>
            <td>И.о. завкафедрой, к.пед.н., доцент</td>
            <td>Исупова Наталья Ивановна</td>
            <td>8 (8332) 742-412 (зав.), 742-626 (каф.)</td>
            <td>usr11710@vyatsu.ru</td>
            <td>610000, г. Киров, ул. Свободы, 122 (уч. корп. № 16), ауд. 423</td>
          </tr>
          <tr>
            <td colSpan={5}>
                <div style={{float: "left"}}>
                  <h4>
                    <span style={{display: "inline-block", width: "60px"}}></span>
                    <span style={{display: "inline-block", width: "60px"}}></span>
                    Кафедра прикладной математики и информатики
                  </h4> {/*Раздел 2 относится к разделу 1, поэтому 2 табуляция в виде span*/}
                </div>
            </td>
          </tr>
          <tr>
            <td>Завкафедрой, канд. пед. наук, доцент</td>
            <td>разова Елена Владимировна</td>
            <td>8 (8332) 742-520, 742-521 (каф.)</td>
            <td>ev_razova@vyatsu.ru</td>
            <td>610002, Кировская область, г. Киров, ул. Ленина, д.111, каб. 137</td>
          </tr>
          <tr>
            <td colSpan={5}>
                <div style={{float: "left"}}>
                  <h4>
                    <span style={{display: "inline-block", width: "60px"}}></span>
                    <span style={{display: "inline-block", width: "60px"}}></span>
                    Кафедра фундаментальной математики
                  </h4> {/*Раздел 2 относится к разделу 1, поэтому 2 табуляция в виде span*/}
                </div>
            </td>
          </tr>
          <tr>
            <td>Завкафедрой, д. физ.-мат.н., профессор</td>
            <td>Вечтомов Евгений Михайлович</td>
            <td>8 (8332) 742-515, 742-516 (кафедра)</td>
            <td>usr08006@vyatsu.ru, kaf_fikm@vyatsu.ru</td>
            <td>610002, г. Киров, ул. Ленина, 111, каб. 203, 313 (кафедра)</td>
          </tr>
          <tr>
            <td colSpan={5}>
                <div style={{float: "left"}}>
                  <h4>
                    <span style={{display: "inline-block", width: "60px"}}></span>
                    <span style={{display: "inline-block", width: "60px"}}></span>
                    Кафедра физики и методики обучения физике
                  </h4> {/*Раздел 2 относится к разделу 1, поэтому 2 табуляция в виде span*/}
                </div>
            </td>
          </tr>

          <tr>
            <td>И. о. заведующего кафедрой, доцент, канд.физ.-мат.наук, заведующий кафедрой Инженерной физики</td>
            <td>Хлебов Алексей Георгиевич</td>
            <td>8 (8332) 742-412, 11-36 (внутр.)</td>
            <td>ag_hlebov@vyatsu.ru</td>
            <td>610002, Кировская область, г. Киров, ул. Ленина, д. 111, каб. 341</td>
          </tr>
          <tr>
            <td colSpan={5}>
                <div style={{float: "left"}}>
                  <h4>
                    <span style={{display: "inline-block", width: "60px"}}></span>
                    <span style={{display: "inline-block", width: "60px"}}></span>
                    Кафедра инженерной физики
                  </h4> {/*Раздел 2 относится к разделу 1, поэтому 2 табуляция в виде span*/}
                </div>
            </td>
          </tr>
          <tr>
            <td>Завкафедрой, к.физ.-мат.н., доцент</td>
            <td>Хлебов Алексей Георгиевич</td>
            <td>	8 (8332) 742-730</td>
            <td>ag_hlebov@vyatsu.ru kaf_fizika@vyatsu.ru</td>
            <td>610002, г. Киров, ул. Ленина, д. 111, каб. 342</td>
          </tr>
        </tbody>
      </table>`
    </>
  )
}

export default App
