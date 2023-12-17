import React from 'react'
import cls from './Program.module.scss'
import { Button } from '../../Buttons/Button'
import { useNavigate } from 'react-router-dom'

const Program = ({ label, url }) => {

  const navigate = useNavigate()
  const handleNavigateTo = () => navigate(`/detail/${label}`)

  return (
    <>
      <div className={cls.card} style={{ background: `url(${url}) center/cover` }}>
        <div className={cls.card_top} >
          <h1>{label}</h1>
        </div>
        <div className={cls.card_bottom}>
          <Button
            variant='outline'
            action={handleNavigateTo}
            customStyles={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            Детали программы
          </Button>
        </div>
      </div >
    </>
  )
}

export default Program