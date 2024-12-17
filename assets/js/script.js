// Get the modal
var modal = document.getElementById("project-modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Function to open the modal with project details
function openModal(content) {
    var modalBody = document.getElementById("modal-body");
    modalBody.innerHTML = content;
    modal.style.display = "block";
}

// Handle card click event
function handleCardClick(type, content) {
    if (type === 'site') {
        window.open(content, '_blank');
    } else if (type === 'modal') {
        var contentHtml = "";
        switch(content) {
            case '01':
                contentHtml = `
                    <div class="projects">
                        <h2>Enhancing Melanoma Detection: A Comparative Study of Machine Learning Techniques Using the Melanoma Skin Cancer Dataset</h2>
                        <div class="key-concepts">
                            <div class="concept">Machine Learning</div>
                            <div class="concept">CNNs</div>
                            <div class="concept">SVMs</div>
                            <div class="concept">Transfer Learning</div>
                            <div class="concept">ResNet-18</div>
                            <div class="concept">Hyperparameter Optimization</div>
                        </div>
                        <h3>Abstract</h3>
                        <div class="content">
                            <p>Early detection of melanoma skin cancer is critical for effective treatment. In this study, we compare machine learning techniques, including CNNs, SVMs, Logistic Regression, and Transfer Learning with ResNet-18, using the Melanoma Skin Cancer Dataset. Through pre-processing and hyperparameter optimization, we assess model performance in terms of accuracy, precision, recall, and F1-score. Our findings highlight CNNs’ efficacy in achieving high accuracy, with SVM and Transfer Learning also showing promise. This study contributes to advancing machine learning applications in medical imaging for melanoma detection.</p>
                        </div>
                        <h3 style="margin-bottom: 20px;">Project Report</h3>
                        <div class="iframe-container pdf-container">
                            <iframe src="../assets/projects/01-enhancingmelanomadection/enhancing_melanoma_detection.pdf"></iframe>
                        </div>
                        <h3 style="margin-top: 50px; margin-bottom: 20px;">Presentation Slides</h3>
                        <div class="iframe-container slides-container">
                            <iframe src="../assets/projects/01-enhancingmelanomadection/enhancing_melanoma_detection_slides.pdf"></iframe>
                        </div>
                    </div>
                `;
                break;
            case '02':
                contentHtml = `
                    <div class="projects">
                        <h2>Autonomous Taxi System within a Simulated City Environment</h2>
                        <div class="key-concepts">
                            <div class="concept">Autonomous Vehicles</div>
                            <div class="concept">Particle Filter</div>
                            <div class="concept">A* Search Algorithm</div>
                            <div class="concept">Stanley Controller</div>
                            <div class="concept">Perception</div>
                        </div>
                        <h3>Introduction</h3>
                        <div class="content">
                            <p>Our immersion project focused on developing an autonomous taxi system within a simulated miniature city environment. We programmed a virtual taxi to navigate this environment autonomously, relying solely on raw sensor measurements (e.g., GPS, IMU) and the bounding box output of object detection algorithms. The core challenge involved achieving robust perception and localization, allowing the taxi to understand its surroundings and precisely determine its position within the map. This perception data then fueled dynamic routing and motion planning. By leveraging this information, the taxi could navigate a designated sequence of pick-up and drop-off locations while adhering to a predefined set of traffic regulations (lane markings, stop signs, etc). We competed against other teams in a live event, and our success hinged on our ability to effectively combine localization, routing, motion planning, and perception to achieve safe and efficient autonomous navigation. Following our demo at the immersion showcase, we identified areas for improvement including resolving edge conditions with localization and fully-integrating perception.</p>
                        </div>
                        <h3 style="margin-top: 20px; margin-bottom: 20px;">Presentation Slides</h3>
                        <div class="iframe-container slides-container">
                            <iframe src="../assets/projects/02-avproj/autonomous_vehicle_pres.pdf"></iframe>
                        </div>
                        <h3 style="margin-top: 50px; margin-bottom: 20px;">Project Report</h3>
                        <div class="iframe-container pdf-container">
                            <iframe src="../assets/projects/02-avproj/autonomous_vehicle_report.pdf"></iframe>
                        </div>
                        <h3 style="margin-top: 50px; margin-bottom: 20px;">Video Demonstration</h3>
                        <div class="iframe-container video-container">
                            <iframe src="https://www.youtube.com/embed/OBskx_j5HS4" allowfullscreen></iframe>
                        </div>
                    </div>
                `;
                break;
            case '03':
                contentHtml = `
                <div class="projects">
                    <h2>Grants Self Service System</h2>
                    <div class="key-concepts">
                        <div class="concept">Generative AI</div>
                        <div class="concept">RAG</div>
                        <div class="concept">LLMs</div>
                        <div class="concept">Data Security</div>
                    </div>
                    <h3>Introduction</h3>
                    <div class="content">
                        <p>The Grants-Self-Service project represents a transformative step in managing the grant application process at Vanderbilt University. This pioneering initiative utilizes advanced generative AI, including private, institutional AI instances and innovative techniques like retrieval augmented generation (RAG) and custom GPT models. <br><br> Our aim is to simplify and accelerate grant development and submission, enabling faculty to swiftly access and efficiently handle vast repositories of prior grant data, which include over 479,980 previously submitted grants. The system ensures high data privacy and security standards by operating within Vanderbilt’s high-performance computing environment. By streamlining these complex processes, the project supports our academic community in navigating the intricacies of funding and research management more effectively. Our goal is to create a self-service system designed to accelerate the process of developing and submitting grants, enabling faculty to quickly access prior grant information and address grant related inquiries efficiently. The project leverages private, institutional instances of generative AI, explore retrieval augmented generation (RAG), and utilize vast quantities of existing data.</p>
                    </div>
                    <h3 style="margin-top: 30px; margin-bottom: 20px;">Presentation Slides</h3>
                    <div class="iframe-container slides-container">
                        <iframe src="../assets/projects/03-grantselfservice/grants_self_service_slides.pdf"></iframe>
                    </div>
                </div>
                `;
                break;
            case '06':
                contentHtml = `
                <div class="projects">
                    <h2>Reinforcement Learning for Recommender Systems: A Critical Review of Multi-Agent, Multi-Scenario, and Multi-Task Frameworks</h2>
                    <div class="key-concepts">
                        <div class="concept">Reinforcement Learning</div>
                        <div class="concept">Recommender Systems</div>
                        <div class="concept">Multi-Task Learning</div>
                        <div class="concept">Scalability</div>
                        <div class="concept">Markov Decision Processes</div>
                        <div class="concept">Dynamic User Preferences</div>
                    </div>
                    <h3>Abstract</h3></h3>
                    <div class="content">
                        <p>Recommender systems are platforms designed to promote personalized services or products to users, such as targeted advertisements on social media. Reinforcement learning (RL) approaches have emerged as powerful tools to improve recommender systems, focusing on optimizing long-term engagement and balancing dynamic user preferences. In this paper, we examine the integration of RL across different facets of recommender systems, including Multi-Task Fusion [4], multi-scenario alignment [7], and hybrid approaches leveraging bi-clustering and MDPs for scala- bility [2]. Additionally, we explore state-of-the-art frameworks, such as UNEX-RL [6], which optimize multi-stage pipelines to enhance long-term rewards. By high- lighting the advancements, challenges, and emerging directions of the current landscape, this paper provides a comprehensive perspective on designing robust and scalable RL-based recommender systems.</p>
                    </div>
                    <h3 style="margin-top: 50px; margin-bottom: 20px;">Project Report</h3>
                    <div class="iframe-container pdf-container">
                        <iframe src="../assets/projects/06-rl-recsys/CS_5891___Final_Project_AdityaShrey.pdf"></iframe>
                    </div>
                </div>
                `;
                break;
            case '08':
                contentHtml = `
                <div class="projects">
                    <h2>Cloud System for Web-based Accessibility using Synthetic Recaptioning</h2>
                    <div class="key-concepts">
                        <div class="concept">Vision-Language Models</div>
                        <div class="concept">Load Balancing</div>
                        <div class="concept">Scalability</div>
                        <div class="concept">Task Scheduling</div>
                        <div class="concept">Time Series Forecasting</div>
                        <div class="concept">Resource Management</div>
                        <div class="concept">Kubernetes</div>
                        <div class="concept">Docker</div>
                    </div>
                    <h3>Abstract</h3></h3>
                    <div class="content">
                        <p>Web-based navigation and content understanding rely heavily on alternative text descriptions for images, especially when speech-to-text systems are employed. However, these image captions are often incomplete, noisy, or missing. In this work, we propose a system that utilizes a Vision-Language Model (VLM) to synthesize accurate and contextually rich image captions. This approach aims to improve the accessibility and user experience for visually-impaired users and others who rely on screen readers. Additionally, we describe the design, implementation, and evalua- tion of a scalable, containerized cloud-based system that simulates the computational demands of such a VLM-based solution and explores various scheduling and load-balancing strategies. The code is available at https://github.com/2021sshah/cloud-latency- forecast-scheduling.</p>
                    </div>
                    <h3 style="margin-top: 50px; margin-bottom: 20px;">Project Report</h3>
                    <div class="iframe-container pdf-container">
                        <iframe src="../assets/projects/08-cloud-proj/Cloud_Project_Report.pdf"></iframe>
                    </div>
                </div>
                `;
                break;
            default:
                contentHtml = "<h2>Looks like the project wasn't linked properly :( </h2> <p>Contact me if you'd like to resolve this!</p>";
        }
        openModal(contentHtml);
    }
}
