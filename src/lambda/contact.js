// import Mailgun from 'mailgun-js'

// const mailgun = Mailgun({
//   apiKey: process.env.MAILGUN_API_KEY,
//   domain: process.env.MAILGUN_DOMAIN,
// })

export function handler(event, context, callback) {
  // const { queryStringParameters: params } = event

  // const data = {
  //   from: `${params.name} <${params.email}`,
  //   to: process.env.MAILGUN_TO_EMAIL,
  //   subject: 'Contact Form Submission',
  //   text: params.message,
  // }

  // mailgun.messages().send(data, function(error, body) {
  //   if (error) {
  //     callback(error, {
  //       statusCode: 500,
  //       body: error.message,
  //     })

  //     return
  //   }

  //   callback(null, {
  //     statusCode: 200,
  //     body: 'Email sent successfully',
  //   })
  // })

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: 'Hello, World!' }),
  })
}
