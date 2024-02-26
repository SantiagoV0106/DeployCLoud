// Ui componets
import { Button } from '../../ui'

// Const
import { mockupBrands } from '../../const/mockupBrands'

// Styles
import './hero.css'

export function Hero() {
    return (
        <div className='hero-section'>
            <h1 className='hero-title'>Automate your <br /> deployment process</h1>
            <h2 className='hero-subtitle'>Focus on what really matters to your business</h2>
            <Button className='action-button' type='button' name='Contact Us' />
            <div className='mockup-container'>
                <img className='mockup-img' src="../src/assets/Img/Laptop-MockUp.png" alt="Laptop-MockUp" />
                {
                    mockupBrands.map(({ id, name, img }, i) => {
                        return (
                                <img key={id} src={img} alt={name} className={`mockup-brand-${i + 1}`} />                           
                        )
                    })
                }
            </div>
        </div>

    )
}