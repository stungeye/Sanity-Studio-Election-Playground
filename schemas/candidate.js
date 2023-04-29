export default {
  name: 'candidate',
  title: 'Candidates',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      required: true,
    },
    {
      name: 'publicEmail',
      title: 'Public Email Address',
      type: 'email',
    },
    {
      name: 'privateEmail',
      title: 'Private Email Address',
      type: 'email',
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url',
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
    },
    {
      name: 'partyLeader',
      title: 'Party Leader Status',
      type: 'boolean',
    },
    {
      name: 'politicalParty',
      title: 'Political Party',
      type: 'reference',
      to: [{type: 'politicalParty'}],
    },
    {
      name: 'constituency',
      title: 'Constituency',
      type: 'reference',
      to: [{type: 'constituency'}],
      required: true,
    },
  ],
}
