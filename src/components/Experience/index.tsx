import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

export default function Experience() {
    const experiences = [
        { value: "bitagua", client: "BiT Água Pedreira", role: "Front-End Developer", period: "Dec 2023-Feb 2024", description: "I developed the front-end of an IoT solution for water management in Pedreira city, using ReactJS, TypeScript, Material UI. The project combines IoT and AI for intelligent water meter readings, predicting consumption and identifying leaks. We used Azure Custom Vision, Azure Open AI and Azure IoTHub. Participation in an agile environment with Scrum methodology." },
        { value: "comgas", client: "COMGÁS", role: "Data Engineer", period: "May 2022 - Dec 2023", description: "Development of several pipelines using models in Databricks notebooks for data processing. Orchestrate pipelines in Azure Data Factory to move data from the raw layer to the trusted layer in Azure Data Lake and perform initial transformations such as deduplication and column transformations. Implementing additional calculations in the refined layer and storing data in Synapse, structured in fact and dimension tables. Participation in an agile environment with Scrum methodology." },
        { value: "raizen", client: "Raízen POC", role: "Data Engineer | DevOps", period: "Dec 2022 - March 2023", description: "Creation of Python scripts to integrate real-time data from gas meter IoT devices with dashboards. Creation of Power BI dashboard to monitor fuel consumption. Setting up the Azure services environment using Terraform, including an Azure VM and a Docker container with SQL for data storage." },
        { value: "bitsaas", client: "IoT Bit Saas", role: "Front-End Developer", period: "Dec 2021 - Dec 2022", description: "Development of the front-end of BIT SAAS IoT platform using ReactJS, TypeScript and Material UI. Backend integrations. Creation of layouts in Figma to ensure an intuitive user experience. Participation in an agile environment with Scrum methodology." },
        { value: "projectintegrated", client: "Integrated Project", role: "Trainee Data Engineer", period: "Sep 2021 - Dec 2021", description: "Developed pipelines using Databricks and Data Factory to analyze forest fire and deforestation data in the Amazon rainforest, incorporating datasets from INPE and the Brazilian government's website. Responsibilities included data integration, transformation, ETL processes execution, and ensuring data quality for presentation in Power BI. Leveraged Azure resources like Azure Data Lake for data processing, Data Factory for orchestration, and Databricks for data transformations and refinements. Presented the project internally to demonstrate competency in handling real client projects." },
        // { client: "", role: "", period: "", description: "" }
    ]
    return (
        <div id="Experience" className="flex flex-col md:py-[15vh] my-[15vh] md:mt-[18vh] mx-8 sm:mx-16 lg:mx-0 ">
            <Separator className="md:hidden bg-slate-700 my-[5vh] md:my-[15vh] "/>
            <h1 className="text-5xl text-center md:text-start mb-10 font-inconsolata sm:text-7xl font-semibold pb-2 bg-clip-text text-transparent bg-gradient-to-br from-white to-slate-600">
                Profissional Experiences
            </h1>
            <Tabs className="flex flex-col items-center md:items-start md:flex-row" defaultValue="bitagua">
                <TabsList className="flex w-full md:w-auto flex-col bg-[#10121552] h-auto rounded-lg">
                    {experiences.map((experience, i) => (
                        <TabsTrigger
                            key={i}
                            className="w-full justify-start font-lexend-exa font-normal tracking-tighter text-4xl border-l-4 border-transparent py-10 md:p-10  data-[state=active]:text-primary-primary data-[state=active]:border-l-primary-primary bg-none hover:bg-none"
                            value={experience.value}
                        >
                            {experience.client}
                        </TabsTrigger>
                    ))}
                </TabsList>

                <div className="flex flex-col mt-16 md:ml-12 w-full">
                    {experiences.map((experience, i) => (
                        <TabsContent key={i} value={experience.value}>
                            <div className="flex flex-wrap justify-between items-center w-full">
                                <h1 className="font-lexend text-4xl sm:text-5xl tracking-widest">{experience.role}</h1>
                                <p className="font-lexend-exa font-thin text-2xl opacity-35 tracking-widest">{experience.period}</p>

                            </div>
                            <h1 className="font-lexend text-4xl text-primary-primary my-10">{experience.client}</h1>
                            <p className="font-lexend-exa text-gray-400">{experience.description}</p>
                        </TabsContent>
                    ))}
                </div>
            </Tabs>
            <Separator className="md:hidden bg-slate-700 my-[5vh] sm:my-[15vh] "/>
        </div>

    );
}

