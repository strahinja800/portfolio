import type { CollectionConfig } from 'payload'

export const Meta: CollectionConfig = {
  slug: 'meta',
  admin: {
    useAsTitle: 'key',
  },
  access: { read: () => true },
  fields: [
    {
      name: 'key',
      type: 'text',
      required: true,
    },
    {
      name: 'value',
      type: 'text',
      required: true,
    },
  ],
}
