import PropTypes from 'prop-types';

const educationItem = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  description: PropTypes.arrayOf(PropTypes.string),
};

const education = PropTypes.arrayOf(PropTypes.shape(educationItem)).isRequired;

const project = {
  title: PropTypes.string,
  description: PropTypes.string,
  teamSize: PropTypes.number,
  role: PropTypes.string,
  responsibilities: PropTypes.arrayOf(PropTypes.string),
  environment: PropTypes.arrayOf(PropTypes.string),
  link: PropTypes.string,
};

const experienceItem = {
  jobTitle: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  startDate: PropTypes.shape({
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
  }).isRequired,
  endDate: PropTypes.shape({
    year: PropTypes.number,
    month: PropTypes.number,
  }),
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape(project)).isRequired,
};

const experience = PropTypes.arrayOf(PropTypes.shape(experienceItem)).isRequired;

const knowledgeItem = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const knowledge = PropTypes.arrayOf(PropTypes.shape(knowledgeItem)).isRequired;

const sideProjectItem = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const sideProject = PropTypes.arrayOf(PropTypes.shape(sideProjectItem)).isRequired;

const listItem = {
  item: PropTypes.string.isRequired,
};

const cv = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  experience: PropTypes.arrayOf(PropTypes.shape(experience)).isRequired,
  education: PropTypes.arrayOf(PropTypes.shape(education)).isRequired,
  sideProject: PropTypes.arrayOf(PropTypes.shape(sideProject)).isRequired,
  knowledge: PropTypes.arrayOf(PropTypes.shape(knowledge)).isRequired,
};

export default {
  cv,
  educationItem,
  education,
  experienceItem,
  experience,
  knowledge,
  knowledgeItem,
  listItem,
  project,
  sideProject,
  sideProjectItem,
};
