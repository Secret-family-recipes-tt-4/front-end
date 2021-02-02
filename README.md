# front-end
Forms, state,styling


Done by Naj, Tazz, and Tony

//api use "https://secret-fam-recipes.herokuapp.com/api"
    -POST.../register
    -POST.../login
    -GET.../recipes
    -GET.../recipes/:id
    -POST.../recipes
    -DATA body={
    "id":   // generated by database
    "user_id":   // automatically grabbed from authorization token
    "title": ""  // string, required
    "source": ""  // string, optional
    "ingredients": ""  // text, required
    "instructions": ""  // text, required
    "notes": ""  // text, optional
    "categories": [ ]  // array of category ids*, optional
    }
    -PUT(update current recipe).../recipes/:id
    -{
    "id":   // grabbed from path variable
    "user_id":   // automatically grabbed from authorization token
    "title": ""  // string, required
    "source": ""  // string, optional
    "ingredients": ""  // text, required
    "instructions": ""  // text, required
    "notes": ""  // text, optional
    "categories": [ ]  // array of category ids*, optional
    }
