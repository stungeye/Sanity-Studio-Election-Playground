export default {
  name: 'politicalParty',
  title: 'Political Parties',
  type: 'document',
  fields: [
    {
      name: 'shortName',
      title: 'Short Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'longName',
      title: 'Long Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'colour',
      title: 'Colour',
      type: 'color',
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'streetAddress',
      title: 'Street Address',
      type: 'string',
    },
    {
      name: 'emailAddress',
      title: 'Email Address',
      type: 'email',
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
  ],
}
