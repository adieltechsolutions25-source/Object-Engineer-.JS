// Creating Object
const Engineer = {
    name: 'Adiel Kamau',
    age: 25,
    role: 'Software Engineer',
    skills: ['JavaScript', 'React', 'Node.js', 'Python'],
    address: {
        street: '123 Main St',
        city: 'Nairobi',
        country: 'Kenya'
    }
};
// Access values from the Engineer object
console.log(Engineer.name);
console.log(Engineer.age);
console.log(Engineer.role);
console.log(Engineer.skills[0]);
console.log(Engineer.address.city);

// Updating values in the Engineer object
Engineer.email = 'adiel.kamau@example.com' 
Engineer.hobbies = ['working out','drawing art','coding'];

//Loop through Object properties
for (const key in Engineer) {
    console.log(key + ':',Engineer[key]);
}
//Check if a property exists in the Engineer object
console.log('email' in Engineer); // true
console.log('phone' in Engineer); // false


