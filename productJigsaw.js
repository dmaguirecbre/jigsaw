$(document).ready(() => {
  let serviceLines = ["esg", "digital", "human-capital"];
  let problemStatements = [
    {
    "categoryNumber": 1,
    "problemStatement": "How can I ensure I will achieve my Net-Zero goals and targets?"
    },
    {
    "categoryNumber": 2,
    "problemStatement": "How can I improve my employee retention rates and reduce turnover, particularly among high-performing employees?"
    },
    {
    "categoryNumber": 3,
    "problemStatement": "What strategies can I implement to optimize my supply chain management and reduce costs associated with procurement, logistics, and distribution?"
    },
    {
    "categoryNumber": 4,
    "problemStatement": "In what ways can I enhance my customer experience and build brand loyalty through innovative marketing and customer service initiatives?"
    },
    {
    "categoryNumber": 5,
    "problemStatement": "How can I foster a culture of innovation and continuous improvement to stay ahead of the competition and maintain its position as a market leader?"
    },
    {
    "categoryNumber": 6,
    "problemStatement": "What steps can I take to ensure my corporate social responsibility initiatives align with its core values and business objectives, while also benefiting the communities I serves?"
    }
    ];
  let services = [
    {
      productName: "AgileNova",
      description: "Revolutionary end-to-end solution for sustainability",
      serviceLine: "esg",
      categories: [2, 4, 1],
    },
    {
      productName: "CloudVista",
      description: "AI-driven platform for customer experience optimization",
      serviceLine: "digital",
      categories: [3, 5],
    },
    {
      productName: "SmartShift",
      description: "Innovative workforce planning and scheduling platform",
      serviceLine: "human-capital",
      categories: [2, 4, 6],
    },
    {
      productName: "Innovent",
      description: "Data-driven enterprise resource planning solution",
      serviceLine: "esg",
      categories: [2, 3, 1],
    },
    {
      productName: "Vizor",
      description: "Integrated suite of business intelligence tools",
      serviceLine: "digital",
      categories: [4, 5],
    },
    {
      productName: "FlexInit",
      description: "Innovative flexible onboarding platform",
      serviceLine: "human-capital",
      categories: [1, 3, 6],
    },
    {
      productName: "VistaVision",
      description: "Real-time visibility into customer journey metrics",
      serviceLine: "esg",
      categories: [4, 5, 6],
    },
    {
      productName: "AcuityCore",
      description: "Integrated HR analytics platform",
      serviceLine: "human-capital",
      categories: [3, 1, 4],
    },
    {
      productName: "EcoVista",
      description: "Eco-friendly data management tools",
      serviceLine: "esg",
      categories: [2, 5, 3],
    },
    {
      productName: "DataVue",
      description: "Big data visualization suite",
      serviceLine: "digital",
      categories: [4, 1],
    },
    {
      productName: "SmartBridge",
      description: "Secure cloud-based storage for enterprise data",
      serviceLine: "digital",
      categories: [5, 2, 4],
    },
    {
      productName: "AgileConnect",
      description: "Smart HR automation platform",
      serviceLine: "human-capital",
      categories: [3, 6, 1],
    },
    {
      productName: "SmartFlux",
      description: "Real-time decision engine for financial analytics",
      serviceLine: "digital",
      categories: [3, 4],
    },
    {
      productName: "Zenify",
      description: "Data-driven platform for predictive risk assessment",
      serviceLine: "esg",
      categories: [1, 5, 6],
    },
    {
      productName: "VitalStream",
      description: "Advanced analytics platform for employee engagement",
      serviceLine: "human-capital",
      categories: [2, 4],
    },
    {
      productName: "Quantify",
      description: "AI-powered platform for financial reporting",
      serviceLine: "digital",
      categories: [2, 3, 6],
    },
    {
      productName: "LiveFlex",
      description: "Innovative platform for supply chain optimization",
      serviceLine: "esg",
      categories: [1, 3, 5, 6],
    },
    {
      productName: "Strataforce",
      description: "Data-driven platform for enterprise risk management",
      serviceLine: "esg",
      categories: [3, 4, 6],
    },
    {
      productName: "Vizionix",
      description: "AI-driven platform for intelligent automation",
      serviceLine: "digital",
      categories: [2, 5],
    },
    {
      productName: "Perceptum",
      description: "Innovative solution for predictive analytics",
      serviceLine: "digital",
      categories: [1, 2, 4],
    },
    {
      productName: "GeminiCore",
      description: "Integrated platform for talent acquisition and retention",
      serviceLine: "human-capital",
      categories: [1, 6],
    },
    {
      productName: "Venturo",
      description: "Robust solution for financial compliance",
      serviceLine: "esg",
      categories: [2, 5, 6],
    },
    {
      productName: "DataSphere",
      description: "AI-powered insights and analytics platform",
      serviceLine: "esg",
      categories: [4, 1, 5],
    },
    {
      productName: "ProfitEase",
      description: "Robust financial management and reporting solution",
      serviceLine: "digital",
      categories: [2, 6],
    },
    {
      productName: "EcoSmart",
      description: "Green energy and resource management system",
      serviceLine: "esg",
      categories: [1, 3, 5],
    },
    {
      productName: "FlexCore",
      description: "Cloud-based infrastructure and deployment platform",
      serviceLine: "digital",
      categories: [2, 4, 6],
    },
    {
      productName: "HRMaximizer",
      description: "Intelligent talent acquisition and retention platform",
      serviceLine: "human-capital",
      categories: [3, 4, 5],
    },
    {
      productName: "SynchroLearn",
      description: "Interactive learning platform for corporate teams",
      serviceLine: "digital",
      categories: [2, 3, 5],
    },
    {
      productName: "LeverEdge",
      description: "Data-driven talent acquisition and management tool",
      serviceLine: "human-capital",
      categories: [1, 3, 4],
    },
    {
      productName: "EcoFLux",
      description: "Next-generation carbon emissions management system",
      serviceLine: "esg",
      categories: [1, 3, 6],
    },
    {
      productName: "DataVista",
      description: "Real-time data analytics and visualization platform",
      serviceLine: "digital",
      categories: [2, 4, 5],
    },
    {
      productName: "NetGlyph",
      description: "AI-powered learning and development platform",
      serviceLine: "human-capital",
      categories: [1, 6],
    },
  ];
  const sidebar = $(".sidebar");
  problemStatements.forEach((statement) => {
    console.log(statement);
    const statementDiv = $("<div>");
    statementDiv.text(statement.problemStatement);
    // Add the categoryNumber as an attr called data-category-number to the statementDiv
    statementDiv.attr("data-category-number", statement.categoryNumber);
    statementDiv.addClass("problem-statement");
    sidebar.append(statementDiv);
  });
  const container = $(".container");
  serviceLines.forEach((sl) => {
    console.log(sl);
    for (let i = 0; i < services.length; i++) {
      const service = services[i];
      console.log(service);
      if (service.serviceLine == sl) {
        const productDiv = $("<div>");
        productDiv.addClass("product");
        productDiv.text(service.productName);

        const descriptionDiv = $("<div>");
        descriptionDiv.addClass("description");
        descriptionDiv.text(service.description);

        productDiv.append(descriptionDiv);

        // div.text(service.description);
        service.categories.forEach((category) => {
          productDiv.addClass("category-" + category);
        });
        $(".container-" + sl).append(productDiv);
      }
    }
  });
  //When we click on a problem statement, we want to flip all the products whose category numbers match the problem statement's categoryNumber
    $(".problem-statement").on("click", function () {   
        const categoryNumber = $(this).attr("data-category-number");
        // add the selected class to the problem statement
        $(this).toggleClass("selected");
        //remove the selected class from all other problem statements
        $(".problem-statement").each(function () {
            if ($(this).attr("data-category-number") !== categoryNumber) {
                $(this).removeClass("selected");
            }
        });
        // add the selected class to the products that match the category number
        $(".product").each(function () {
            if ($(this).hasClass("category-" + categoryNumber)) {
                $(this).toggleClass("selected");
            }
        });
    });
 
});
