import templatesImg from "./assets/templates.jpg";
import viweImg from "./assets/viwe01.jpg";
import modelsImg from "./assets/models01.jpg";
// import stateImg from "./assets/state-mgmt.png";

export const CORE_CONCEPTS = [
  {
    image: templatesImg,
    title: "Templates",
    description:
      "The core UI building block - compose the user interface by combining multiple components.",
  },
  {
    image: viweImg,
    title: "Views",
    description:
      "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
  },
  {
    image: modelsImg,
    title: "Models",
    description:
      "Make components configurable (and therefore reusable) by passing input data to them.",
  },
];
export const EXAMPLES = {
  templates: {
    title: "Templates",
    description:
      "Templates are the building blocks of django applications. A django is a self-contained module (HTML + optional CSS + DTT(DjangoThemplateTag)) that renders some output.",
    code: `
    {% block content %}
    <!-- Your content here -->
       {% endblock %}

       ForLoop

      {%for user in costomer%}
      <h3>{user.name}</h3>
      {%endfor%}
`,
  },
  viwe: {
    title: "Viwe",
    description:
      "Viwe is a Certainly! In Django, a view is a Python function that handles a web request and returns an appropriate web respons.",
    code: `
    def customerPage(request):
    customer=Customer.object.all();

       context={
        "customer":customer}

        returen render(request,'customer.html',context)
       }

       never forget importing models`,
  },
  models: {
    title: "Models",
    description:
      "Django Models is the SQL Database one uses with Django. SQL (Structured Query Language) is complex and involves a lot of different queries for creating, deleting, updating, or any other stuff related to a database.",
    code: `

  class Customer(model.Model)
  name=model.CharField(max_length=100)

  def __str__(self):
   returen self.name
}   class Customer(model.Model)
name=model.CharField(max_length=100)

def __str__(self):
 returen self.name  class Customer(model.Model)
 name=model.CharField(max_length=100)

 def __str__(self):
  returen self.name`,
  },
};
