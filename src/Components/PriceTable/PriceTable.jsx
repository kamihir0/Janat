import React from 'react'
import cls from './PriceTable.module.scss'

const PriceTable = ({ plans }) => {
  return (
    <table className={cls.price_table}>
      <thead className={cls.priceTableHeadTitle}>
        <tr>
          <th>Таблица цен и расписаний</th>
        </tr>
      </thead>
      <tbody>
        {plans.map((plan, index) => (
          <tr key={index}>
            <td>
              <table>
                <caption className={plan.noLimits ? cls.noLimits : cls.caption}>{plan.title}</caption>
                <thead>
                  <tr>
                    <th>Срок действия</th>
                    <th>Время</th>
                    {plan.mma &&
                      (<th>Возраст</th>)
                    }
                    <th>Заморозки</th>
                    <th>Цена</th>
                  </tr>
                </thead>
                <tbody className={cls.innerTable}>
                  {plan.detail.map((detail, detailIndex) => (
                    <tr key={detailIndex}>
                      <td>{detail.validity}</td>
                      <td>{detail.timeStart} - {detail.timeEnd}</td>
                      {detail.age && (<td>{detail.age}</td>)}
                      <td>{!detail.freezing ? 'Нет' : `${detail.freezing} посещений`}</td>
                      <td>{detail.price}сом</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PriceTable;
