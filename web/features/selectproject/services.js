import axios from 'axios';

export async function select(project) {
  let url = `/projects/selected/${project.id}`;
  try {
    let result = await axios.get(url);
    return result.data;
  } catch (error) {
    throw error;
  }
}
