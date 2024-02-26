// React Hooks
import { useEffect, useRef, useState } from 'react'

// UI components
import { Button, Input } from './ui'

// App components
import { Footer, Header, Hero } from './components'

// Const
import { steps } from './const/steps'
import { deployMethods } from './const/deployMethods'

// Styles
import './App.css'


function App() {

  const textAreaRef = useRef(null)
  const [value, setValue] = useState('')

  const handleChange = ({ target }) => {
    setValue(target.value)
  }

  useEffect(() => {
    textAreaRef.current.style.height = '300px'
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px' 
  }, [value])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="offer-section">
          <p className='offer-header'>What do we offer? <span>If you develop software,
            you have repetitive tasks. Forget about them!</span> </p>
          <div className='inbetween'/>
          <p className='offer-detail' >DeployCloud is an automation deployment tool based on Ansible technology
            to configure and deploy software projects automatically.
            We optimize your workflow so you dont have to worry about
            repetitive tasks that do not add additional value. This translates
            into a cost reduction and an improvement in the quality of your product.
            Manage the status of your infrastructure from anywhere...
            as long as you have internet.</p>
        </section>
        <section className="deploy-function-section">
          <h2>How does <br /> Deploycloud function?</h2>
          <h3 id='sub-text'>Go online with three single steps</h3>
          <div className="steps-container">
            {
              steps.map(({ id, img, name, desc }) => {
                return (
                  <div key={id} className='step-container'>
                    <img src={img} alt={`${name}-img`} />
                    <p className='step-desc'>{desc} </p>
                  </div>
                )
              })
            }
          </div>
        </section>
        <section className="dev-section">
          <h2 className='section-header'> Created by <br /> developers for developers</h2>
          <h3>A product that satisfies real necessities,
            If it works for us, it work for you! </h3>
        </section>
        <section className="methods-section">
          <h2 className='section-header'>Deploy from anywhere</h2>
          <h3>We have various methods to facilitate this process.</h3>
          <div className="brands-container">
            {
              deployMethods.map(({ id, name, img }) => {
                return (
                  <div className='deploy-methods-container' key={id}>
                    <img className={name === 'RESTAPI' ? 'restapi-img' : 'brand-img'} src={img} alt={`${name}-img`} />
                  </div>
                )
              })
            }
          </div>
        </section>
        <div className="decoration"></div>
        <section className="contact-us-section">
          <div>
            <h2 className='section-header'>Contact Us</h2>
            <h3>Send us a message, and we will <br /> contact you as soon as possible.</h3>
          </div>
          <form action="" id='contact-us-form'>
            <div className="input-group">
              <Input
                type='text'
                id='name'
              />
              <label
                htmlFor='name'>
                *Name
              </label>
            </div>

            <div className="input-group">
              <Input
                type='text'
                id='email'
              />
              <label
                htmlFor='email'>
                *Email
              </label>
            </div>

            <div className="input-group">
              <textarea
                id='msg-area'
                value={value}
                onChange={handleChange}
                ref={textAreaRef}
                rows={1}
                required
              />
              <label
                htmlFor='msg-area'>
                *Message
              </label>
            </div>

            <Button
              className='action-button'
              type='submit'
              name='Submit'
            />
          </form>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
