'use server'

import { getPayload } from 'payload'
import config from '@payload-config'

export async function getProjects() {
  const payload = await getPayload({ config })
  const projects = await payload.find({
    collection: 'projects',
    sort: 'order',
  })
  return projects.docs
}
