
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Code, Database, Users, Monitor, Clock, MapPin, Globe } from "lucide-react";

export const CareersSection = () => {
  const openPositions = [
    {
      id: "frontend-dev",
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "We're looking for an experienced Frontend Developer to join our team and build amazing user interfaces for our clients using React, TypeScript, and modern web technologies.",
      requirements: [
        "5+ years of experience in frontend development",
        "Strong proficiency in React and TypeScript",
        "Experience with state management libraries",
        "Knowledge of modern CSS frameworks",
        "Passion for clean, maintainable code"
      ],
      icon: Monitor
    },
    {
      id: "backend-dev",
      title: "Backend Developer",
      department: "Engineering",
      location: "Lagos, Nigeria / Remote",
      type: "Full-time",
      description: "Join our backend team to design and implement scalable and secure APIs and services that power our applications.",
      requirements: [
        "3+ years of experience in backend development",
        "Strong knowledge of Node.js or Python",
        "Experience with SQL and NoSQL databases",
        "Understanding of RESTful APIs and microservices",
        "Knowledge of cloud services (AWS, Azure, GCP)"
      ],
      icon: Database
    },
    {
      id: "fullstack-dev",
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "We're seeking a versatile Full Stack Developer who can work across the entire software stack to deliver complete solutions for our clients.",
      requirements: [
        "4+ years of full stack development experience",
        "Proficiency in frontend (React) and backend (Node.js) technologies",
        "Experience with database design and management",
        "Knowledge of DevOps practices",
        "Strong problem-solving skills"
      ],
      icon: Code
    },
    {
      id: "product-manager",
      title: "Product Manager",
      department: "Product",
      location: "Abuja, Nigeria / Remote",
      type: "Full-time",
      description: "Looking for a skilled Product Manager to guide our product development process, from ideation to launch, ensuring we create solutions that meet customer needs.",
      requirements: [
        "3+ years of product management experience",
        "Experience with agile methodologies",
        "Strong analytical and problem-solving skills",
        "Excellent communication and stakeholder management",
        "Technical background preferred"
      ],
      icon: Users
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Join Our Team</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            At Fidcent Tech, we're always looking for talented individuals who are passionate about technology and innovation.
          </p>
        </div>

        <div className="mb-16 glass-card p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="flex flex-col items-center text-center">
              <div className="h-14 w-14 gradient-bg rounded-full flex items-center justify-center mb-4">
                <Globe className="text-white h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Remote-First Culture</h3>
              <p className="text-gray-600 dark:text-gray-300">Work from anywhere in the world with our flexible, remote-first approach.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-14 w-14 gradient-bg rounded-full flex items-center justify-center mb-4">
                <Code className="text-white h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cutting-Edge Tech</h3>
              <p className="text-gray-600 dark:text-gray-300">Work with the latest technologies and continuously learn and grow your skills.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-14 w-14 gradient-bg rounded-full flex items-center justify-center mb-4">
                <Users className="text-white h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaborative Team</h3>
              <p className="text-gray-600 dark:text-gray-300">Join a supportive team that values collaboration, diversity, and innovation.</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {openPositions.map((job) => (
            <Card key={job.id} className="transition-all hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex gap-4">
                    <div className="p-2 gradient-bg rounded-md">
                      <job.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle>{job.title}</CardTitle>
                      <CardDescription>{job.department}</CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-2 py-1 bg-secondary rounded-full flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {job.location}
                  </span>
                  <span className="text-xs px-2 py-1 bg-secondary rounded-full flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {job.type}
                  </span>
                </div>
                <h4 className="font-semibold mb-2">Requirements:</h4>
                <ul className="space-y-1 mb-4 list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                  {job.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
                <Button className="w-full gradient-bg text-white hover:opacity-90">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-secondary rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Don't see a position that fits?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send your resume to <a href="mailto:careers@fidcent.com" className="text-fidcent-green font-medium">careers@fidcent.com</a> and let us know how you can contribute to our team.
          </p>
          <Button variant="outline" size="lg">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};
