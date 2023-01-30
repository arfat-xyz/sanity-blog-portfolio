export default {
  name: 'author',
  type: 'document',
  title: 'Author',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'authorimage',
      type: 'image',
      title: 'Author Image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
  ],
}
