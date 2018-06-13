import _ from 'lodash';
import axios from 'axios';

export function select(selectedProject) {
  return new Promise((resolve, reject) => {
    console.log('start fetchProjects');
    axios.get('/projects/selected/' + selectedProject.id).then(
      res => {
        resolve(res.data);
      },
      err => {
        reject(err);
      }
    );
  });
}
