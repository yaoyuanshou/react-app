/**
 * 通用组件detail-cell的开发
 * 时间：2020/4/5
 */
import React from 'react'
import style from './index.module.scss'
import propTypes from 'prop-types'

export const DetailCell = ({p, span, img, alt, bottom,onClick}) => (
    <dl className={style.cell} style={bottom && {borderBottom: '1px solid rgba(149,154,158,0.6)'}} onClick={onClick}>
        <dt className={style.icon}>
            {p ? <img src={img} alt={alt} className={style.img2}/> : <img src={img} alt={alt} className={style.img1}/>}
        </dt>
        <dd className={style.text}>
            {p && <p>{p}</p>}
            {span && <span>{span}</span>}
            
        </dd>
    </dl>
)

export default DetailCell

DetailCell.defaultProps = {
    alt: 'jinx',
    onClick: () => {},
    // bottom: false,(不好使)
}

DetailCell.propTypes = {
    p: propTypes.string,
    span: propTypes.string,
    img: propTypes.string.isRequired,
    alt: propTypes.string.isRequired,
    bottom: propTypes.bool,
    onClick: propTypes.func
}
