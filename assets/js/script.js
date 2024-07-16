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
                        <iframe src="assets/projects/01-enhancingmelanomadection/enhancing_melanoma_detection.pdf" width="80%" height="1250px" style="border: none; overflow: auto;"></iframe>
                        <h3 style="margin-top: 50px; margin-bottom: 20px;">Presentation Slides</h3>
                        <iframe src="assets/projects/01-enhancingmelanomadection/enhancing_melanoma_detection_slides.pdf" width="100%" height="650px" style="border: none; overflow: auto;"></iframe>
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
                        <iframe src="assets/projects/02-avproj/autonomous_vehicle_pres.pdf" width="100%" height="650px" style="border: none; overflow: auto;"></iframe>
                        <h3 style="margin-top: 50px; margin-bottom: 20px;">Project Report</h3>
                        <iframe src="assets/projects/02-avproj/autonomous_vehicle_report.pdf" width="80%" height="1250px" style="border: none; overflow: auto;"></iframe>
                        <h3 style="margin-top: 50px; margin-bottom: 20px;">Video Demonstration</h3>
                        <iframe width="750" height="450" src="https://www.youtube.com/embed/OBskx_j5HS4" frameborder="0" allowfullscreen></iframe>
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
                            <iframe src="assets/projects/03-grantselfservice/grants_self_service_slides.pdf" width="100%" height="650px" style="border: none; overflow: auto;"></iframe>
                        </div>
                    `;
                    break;
            default:
                contentHtml = "<h2>Looks like the project wasn't linked properly :( </h2> <p>Contact me if you'd like to resolve this!</p>";
        }
        openModal(contentHtml);
    }
}
