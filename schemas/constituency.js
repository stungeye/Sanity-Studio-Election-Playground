export default {
  name: 'constituency',
  title: 'Constituencies',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'numberOfSeats',
      title: 'Number of Seats',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Parent Constituency',
      name: 'parent',
      type: 'reference',
      to: [{type: 'constituency'}],
    },
  ],
}
