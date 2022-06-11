import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '2yerc7k5',
  dataset:'production',
  apiVersion:'2021-03-25',
  token:'skUbzcAVatfwu5l8acKk8K0xpxupY5BawvvyuCsWiRlnA9fttmoe6EORYltVJs5gcL7JkhS2a0dUGQueJycpARWmU6HVsp45p63gw4KCXlXMLdyQAtuPc5E0Iag1pt900tkElJqHn1PVKVINupgjTlyAYSSbZU79iv5mYAvbNKh5yBXFvD4U',
  useCdn:false
})