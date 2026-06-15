import { getProjects } from '@/app/(app)/actions'

export async function GET() {
  try {
    const projects = await getProjects()
    return Response.json(projects)
  } catch (error) {
    console.error('Error fetching projects:', error)
    return Response.json([], { status: 500 })
  }
}
