export type EducationType = {
    date: string,
    school: string,
    title: string,
    course: string
}

export const educationData: EducationType[] = [
    {
        date: "2015 - 2017",
        school: "Politecnico di Milano",
        title: "Master of Architecture",
        course: "Architecture",
    },
    {
        date: "2010 - 2014",
        school: "Warsaw University of Technology",
        title: "Bachelor of Science",
        course: "Architecture and Urbanism",
    }
]