import { Selector } from 'testcafe' // first import testcafe selectors

fixture`Getting Started`.page`https://devexpress.github.io/testcafe/example` // declare the fixture // specify the start page

//then create a test and place your code there
test('My first test', async t => {
  await t
    .typeText('#developer-name', 'John Smith')
    .click('#submit-button')

    // Use the assertion to check if the actual header text is equal to the expected one
    .expect(Selector('#article-header').innerText)
    .eql('Thank you, John Smith!')
})

// import test from 'ava'
// import { Server } from './helper/server'

// // We keep a reference to Nuxt so we can close
// // the server at the end of the test
// const server = new Server()

// // Init Nuxt.js and start listening on localhost:4000
// test.before('Init Nuxt.js', server.start.bind(server))

// // Close the Nuxt server
// test.after('Closing server', server.stop.bind(server))

// // Example of testing only generated html
// test('Route / exits and render HTML', async t => {
//   let context = {}
//   const { html } = await server.renderRoute('/', context)
//   t.true(html.includes('container'))
//   t.true(html.includes('navbar'))
// })

// // Example of testing via DOM checking
// // test('Route / exits and render HTML with CSS applied', async t => {
// //   const window = await nuxt.renderAndGetWindow('http://localhost:4000/')
// //   const element = window.document.querySelector('.container')
// //   console.log(element)
// //   t.not(element, null)
// // })
