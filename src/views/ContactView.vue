<template>
	<!--Navbar-->
    <Navbar class="navbar" />
    <NavbarStudent class="navbarStudent" />
    <div class="app">
        <div id="form" class="container">
            <form th:action="@{iletisim}" th:object="${Contact}" method="post">			
                <h1 id="iletisimBaslık">Contact with me</h1>
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label for="first">Name</label>
                            <input type="text" class="form-control"  id="firstName" name="firstName" required placeholder="">
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <label for="last">Surname</label>
                            <input type="text" class="form-control"  id="lastName" name="lastName" required placeholder="">
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <label for="email">Email adress</label>
                            <input type="text" class="form-control"  id="email" name="email" required placeholder="">
                        </div>
                    </div> 
                    <div class="col-12">

                        <div class="form-group">
                            <label for="phone">Phone Number</label>
                            <input type="tel" class="form-control" id="phoneNumber" name="phoneNumber" required placeholder="">
                        </div>
                    </div>   
                    <div class="col-12">
                        <div class="form-group">
                            <label for="message">Your Message</label>
                            <input type="text" class="message form-control" id="message" name="message" required placeholder="">
                        </div>
                    </div>                               
                </div>

                <button type="submit" class="btn btn-primary mt-3">Submit</button>
            </form>
        </div>
    </div>


</template>

<script>
  import Navbar from "@/components/NavBar.vue";
  import NavbarTutor from "@/components/NavBarTutor.vue";

export default {

  components: {
    Navbar,
    NavbarTutor
  },
}
</script>

<style scoped>
    /*Contact*/
    #iletisimBaslık{
        font-size: 45px;
        margin-bottom: 50px;
        color: #1d1e1e;
    }
    .form-group label {
        text-align: left;
        display: block;
        margin-bottom: 5px;
        margin-left: 3px;
    }

    .col-12 {
        border-width: 4px;
        border-color: red;
    }
    .message{
        padding:30px;
    }
</style>