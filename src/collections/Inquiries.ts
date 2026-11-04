import type { CollectionConfig } from 'payload'
import { SERVICE_OPTIONS } from '../constants/web-development-consts'

/* leads from /web-development — created server-side only, admin-only access */
export const Inquiries: CollectionConfig = {
  slug: 'inquiries',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'service', 'createdAt'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'company',
      type: 'text',
    },
    {
      name: 'service',
      type: 'select',
      options: [...SERVICE_OPTIONS],
    },
    {
      name: 'details',
      type: 'textarea',
      required: true,
    },
  ],
}
