// Give Sibling Elements a Unique Key Attribute

const frontEndFrameworks = [
    'React',
    'Angular',
    'Ember',
    'Knockout',
    'Backbone',
    'Vue'
];
  
function Frameworks() {
    const renderFrameworks = frontEndFrameworks.map((item) => <li key={item}>{item}</li>);
    return (
      <div>
        <h1>Popular Front End JavaScript Frameworks</h1>
        <ul>
          {renderFrameworks}
        </ul>
      </div>
    );
};

/**
 * Using the array element as the key:
 * const renderFrameworks = frontEndFrameworks.map((item) => <li key={item}>{item}</li>);
 * 
 * Using the array index as the key (should be avoided):
 * const renderFrameworks = frontEndFrameworks.map((item, index) =><li key={index}>{item}</li>);
 */