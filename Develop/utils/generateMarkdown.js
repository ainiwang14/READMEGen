// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data['title']}
  # ${data['description']}
  # ${data['installation']}
  # ${data['usage']}
  # ${data['license']}
  # ${data['contributors']}
  # ${data['test']}
  # ${data['questions']}

`;
}

module.exports = generateMarkdown;
