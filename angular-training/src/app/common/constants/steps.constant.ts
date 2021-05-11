export const finishedSteps = [
    {
        order: 1,
        description: 'Created application',
        usedResources: [
            {
                resource: 'ng new angular-training --routing=true',
                link: 'https://angular.io/cli/new'
            }
        ]
    },
    {
        order: 2,
        description: 'Fixed application for IE11',
        usedResources: []
    },
    {
        order: 3,
        description: 'Configure app prefixes',
        usedResources: []
    },
    {
        order: 4,
        description: 'Add dashoard module',
        usedResources: [
            {
                resource: 'ng generate module dashboard --routing=true',
                link: 'https://angular.io/cli/generate'
            }
        ]
    },
    {
        order: 5,
        description: 'Add dashoard component',
        usedResources: [
            {
                resource: 'ng generate component dashboard --flat',
                link: 'https://angular.io/cli/generate'
            }
        ]
    },
    {
        order: 6,
        description: 'Add routing',
        usedResources: [
            {
                resource: 'ng generate module home',
                link: 'https://angular.io/cli/generate'
            },
            {
                resource: 'ng generate component home --flat',
                link: 'https://angular.io/cli/generate'
            }
        ]
    },
    {
        order: 7,
        description: 'Use directives and variables interpolation',
        usedResources: [
            {
                resource: 'Built in directives',
                link: 'https://angular.io/guide/built-in-directives'
            }
        ]
    },
    {
        order: 8,
        description: 'Create dashboard service',
        usedResources: [
            {
                resource: 'ng generate service dashboard',
                link: 'https://angular.io/cli/generate'
            },
            {
                resource: 'Angular services',
                link: 'https://angular.io/guide/architecture-services'
            }
        ]
    }
];