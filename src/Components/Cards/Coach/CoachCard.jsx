import React from 'react'
import cls from './CoachCard.module.scss'
import { Button } from '../../Buttons/Button'
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { v4 } from 'uuid';

const CoachCard = ({ name, role, url, bio, linkToInst, type }) => {

  const icons = [FaTwitter, FaFacebook, FaInstagram];

  return (
    <>
      <div className={cls.card}>
        <div className={cls.left}>
          <img src={url} alt={`${name}`} />
        </div>
        <div className={cls.right}>
          <div className={cls.coachInfo}>
            <h2>{name}</h2>
            <span>{role}/{type}</span>
            <p>{bio}</p>
          </div>
          <div className={cls.social}>
            {
              icons.map((SocialIcon => (
                <Button
                  variant='outline'
                  customStyles={{ padding: '0px 0px', width: '33px', height: '33px', }}
                  rounded
                  key={v4()}
                >
                  <SocialIcon />
                </Button>
              )))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default CoachCard