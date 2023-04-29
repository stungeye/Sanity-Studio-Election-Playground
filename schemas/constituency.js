export default {
  name: 'constituency',
  title: 'Constituencies',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      required: true,
    },
    {
      name: 'numberOfSeats',
      title: 'Number of Seats',
      type: 'number',
      required: true,
    },
    {
      name: 'parent',
      type: 'reference',
      to: [{type: 'constituency'}],
      required: true,
    },
  ],
}
