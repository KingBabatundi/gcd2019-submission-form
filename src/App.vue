<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm8 offset-sm2>
        <h2>GCD Website Details</h2>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12>
        <v-layout row>
           <v-flex v-if="isShow" xs12 sm8 offset-sm2>
             <br><br>
            <h1>Thank you for submitting your details, {{studentInfo.firstname}}!</h1>
            <br><br>
            <p>Upload receipt:<br><br>

             First name: {{studentInfo.firstname}} <br>
             Last name: {{studentInfo.lastname}} <br>
             Description: {{studentInfo.description}} <br>
             Disciplines: {{studentInfo.discipline1}} , {{studentInfo.discipline2}} , {{studentInfo.discipline3}} <br>
             Themes: {{studentInfo.themes1}} , {{studentInfo.themes2}}, {{studentInfo.themes3}} <br>
             Non-uni email: {{studentInfo.email}} <br>
             Instagram: {{studentInfo.instagram}}  <br>
             Linkedin: {{studentInfo.linkedin}} <br>
             Twitter: {{studentInfo.twitter}} <br>
             Website: {{studentInfo.website}} <br>
             Images Uploaded: {{studentInfo.images.length}} <br>
             Videos: {{studentInfo.video1}} {{studentInfo.video2}} <br> 
             {{studentInfo.video3}} {{studentInfo.video4}} 
            
             </p>

           </v-flex>
        </v-layout>
        <form v-if="!isHidden">
          <!-- First Name -->
          <v-layout row>
            <v-flex xs12 sm8 offset-sm2>
              <v-text-field
                name="firstname"
                label="First Name [required]"
                id="firstname"
                v-model="studentInfo.firstname"
                :rules="studentInfo.nameRules"
                counter="20"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <!-- Second Name -->
          <v-layout row>
            <v-flex xs12 sm8 offset-sm2>
              <v-text-field
                name="lastname"
                label="Last Name [required]"
                id="lastname"
                v-model="studentInfo.lastname"
                :rules="studentInfo.nameRules"
                counter="20"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
           <!-- Description -->
          <v-layout row>
            <v-flex xs12 sm8 offset-sm2>
              <v-text-field
                name="description"
                label="Description of your work/practice [required]"
                id="description"
                multi-line
                counter="450"
                v-model="studentInfo.description"
                :rules="studentInfo.descriptionRules"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <!-- Disciplines -->
          <v-layout row>
            <v-flex xs12 sm8 offset-sm2>
              <h3><br>Select max three disciplines that apply to your design practice<br><br></h3>
              <v-select
                :items="studentInfo.disciplineList"
                label="Select Discipline 1 [required]"
                v-model="studentInfo.discipline1"
                :rules="studentInfo.disciplinesRules"
                required
              ></v-select>
            </v-flex>
          </v-layout>
          <!-- disciplines 2 -->
          <v-layout row>
            <v-flex xs12 sm8 offset-sm2>
              <v-select
                :items="studentInfo.disciplineList"
                label="Select Discipline 2"
                v-model="studentInfo.discipline2"
              ></v-select>
            </v-flex>
          </v-layout>
          <!-- disciplines 3 -->
          <v-layout row>
            <v-flex xs12 sm8 offset-sm2>
              <v-select
                :items="studentInfo.disciplineList"
                label="Select Discipline 3"
                v-model="studentInfo.discipline3"
              ></v-select>
            </v-flex>
          </v-layout>
           <!-- Themes -->
          <v-layout row>
            <v-flex xs12 sm8 offset-sm2>
              <h3><br><br>Select max three themes that apply to your design practice</h3>
              <v-select
                :items="studentInfo.themesList"
                label="Select Theme 1 [required]"
                v-model="studentInfo.themes1"
                :rules="studentInfo.themesRules"
                required
              ></v-select>
            </v-flex>
          </v-layout>
            <!-- Themes 2 -->
          <v-layout row>
            <v-flex xs12 sm8 offset-sm2>
              <v-select
                :items="studentInfo.themesList"
                label="Select Theme 2"
                v-model="studentInfo.themes2"
              ></v-select>
            </v-flex>
          </v-layout>
            <!-- Themes 3 -->
          <v-layout row>
            <v-flex xs12 sm8 offset-sm2>
              <v-select
                :items="studentInfo.themesList"
                label="Select Theme 3"
                v-model="studentInfo.themes3"
              ></v-select>
            </v-flex>
          </v-layout>
      
          <!-- Non-uni email -->
          <v-layout row>
            <v-flex xs12 sm8 offset-sm2>
              <v-text-field
                name="email"
                label="Non-Uni Email [required]"
                id="email"
                v-model="studentInfo.email"
                :rules="studentInfo.emailRules"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <!-- Instagram Url -->
          <v-layout row>
            <v-flex xs12 sm8 offset-sm2>
              <v-text-field
                name="instagram"
                label="Instagram Url"
                id="instagram"
                :rules="studentInfo.urlRules"
                v-model="studentInfo.instagram"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <!-- Twitter Url -->
          <v-layout row>
            <v-flex xs12 sm8 offset-sm2>
              <v-text-field
                name="twitter"
                label="Twitter Url"
                id="twitter"
                :rules="studentInfo.urlRules"
                v-model="studentInfo.twitter"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <!-- Linkedin Url -->
          <v-layout row>
            <v-flex xs12 sm8 offset-sm2>
              <v-text-field
                name="linkedin"
                label="Linkedin Url"
                id="linkedin"
                :rules="studentInfo.urlRules"
                v-model="studentInfo.linkedin"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <!-- Website Url -->
          <v-layout row>
            <v-flex xs12 sm8 offset-sm2>
              <v-text-field
                name="website"
                label="Website Url"
                id="website"
                v-model="studentInfo.website"
                :rules="studentInfo.websiteRules"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout>
              <v-flex xs12 sm8 offset-sm2>
             <br><br>
            <h2>Upload Max 5 Examples of Your Work (Image files/Video links) [required]<br></h2><h3 style="line-height: 1.3">
            - You must upload atleast one image and max 4 video links<br>
            - Max 1MB per image<br>
            - If you upload more than five examples, we will pick five at random<br>
            - Example: 2 pictures of your degree show piece + 3 other projects<br><br>

            - Images: .png/.jpg/.gif only / Videos: vimeo/youtube links only</h3><br><br>
               </v-flex>
            <br><br>
          </v-layout>
          <!-- Images -->
          <v-layout>
            <v-flex xs12 sm8 offset-sm2>
              <!-- <img :src="studentInfo.imageUrl" height="150" v-if="studentInfo.imageUrl"> -->
              <img v-for="image in studentInfo.images" :src="image" v-bind:key="image" height="150" />
              <v-text-field
                label="Upload one image at a time, wait for image preview then upload next image"
                @click="pickFile"
                v-model="studentInfo.imageName"
                prepend-icon="attach_file"
                
              ></v-text-field>
              <input
                type="file"
                style="display: block"
                ref="image"
                accept="image/x-png,image/gif,image/jpeg"
                @change="onFilePicked"
                required
              >
          
            </v-flex>
          </v-layout>
          <br>
          <!-- Video Url -->
          <v-layout row>
            <v-flex xs12 sm8 offset-sm2>
              <v-text-field
                name="video1"
                label="Video Link 1: Youtube/Vimeo Only"
                id="video1"
                v-model="studentInfo.video1"
                :rules="studentInfo.videoRules"
              ></v-text-field>
            </v-flex>
          </v-layout>  
           <!-- Video Url -->
          <v-layout row>
            <v-flex xs12 sm8 offset-sm2>
              <v-text-field
                name="video2"
                label="Video Link 2: Youtube/Vimeo Only"
                id="video2"
                v-model="studentInfo.video2"
                :rules="studentInfo.videoRules"
              ></v-text-field>
            </v-flex>
          </v-layout>
           <!-- Video Url -->
          <v-layout row>
            <v-flex xs12 sm8 offset-sm2>
              <v-text-field
                name="video3"
                label="Video Link 3: Youtube/Vimeo Only"
                id="video3"
                v-model="studentInfo.video3"
                :rules="studentInfo.videoRules"
              ></v-text-field>
            </v-flex>
          </v-layout>
           <!-- Video 4 Url -->
          <v-layout row>
            <v-flex xs12 sm8 offset-sm2>
              <v-text-field
                name="video4"
                label="Video Link 4: Youtube/Vimeo Only"
                id="video4"
                v-model="studentInfo.video4"
                :rules="studentInfo.videoRules"
              ></v-text-field>
            </v-flex>
          </v-layout>    
         
          <!-- Submit Details -->
          <v-layout>
            <v-flex xs12 sm8 offset-sm2>
               <p v-if="formIsCorrect"><br>MAKE SURE ALL YOUR DETAILS ARE CORRECT<br></p>
              <v-btn :disabled="!formIsCorrect"  v-on:click="isHidden = true, isShow = true" v-on:click.prevent="post">Submit Details</v-btn>
               <p v-if="!formIsCorrect">Please fill out all [required] fields and correctly</p>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { db } from "./main";

import { database, storage } from 'firebase/app';

export default {
  data() {
    return {
      allowSubmit: false,
      seen: true,
      isHidden: false,
      isShow: false,
      studentInfo: {
        firstname: "",
        lastname: "",
        nameRules: [
          v => !!v || "Name is required*",
          v => v.length <= 20 || "Name must be less than 20 characters"
        ],
        email: "",
        emailRules: [
          v => !!v || "E-mail is required*",
          v => /.+@.+/.test(v) || "E-mail must be valid"
        ],
        description: "",
        descriptionRules: [
          v => !!v || "Description is required*",
          v => v.length <= 450 || "Description must be less than 450 characters"
        ],
        discipline1: "",
        discipline2: "",
        discipline3: "",
        disciplineList: [
          "",
          "Critical Design",
          "Speculative Design",
          "Systems / Systematic Thinking",
          "Documentary / Reporting",
          "Experimental Practice",
          "Research-led / Process-led",
          "Interface / UX / Interactivity",
          "Film / Video / Moving Image",
          "Sound",
          "Illustration / Image Making",
          "Branding / Identity / Strategy",
          "Social Design / Design for Good",
          "Site-Specific Design / Interventions",
          "Experience Design",
          "Service Design",
          "Immersive Design", 
          "Digital Design",
          "Interaction Design",
          "Typography / Lettering",
          "Editorial / Book Design",
          "Advertising",
          "3D Design"
        ],
        disciplinesRules: [
          v => !!v || "At least one discipline is required*",
        ],
        themes1: "",
        themes2: "",
        themes3: "",
        themesList: [
          "",
          "Alternatives Futures",
          "Dystopia / Utopia",
          "Sense / Perception / Subversion",
          "Psychology / Behaviour",
          "Ecology / Environment", 
          "Educational / Didactic / Learning",
          "Museology / Archives", 
          "Technology",
          "Anthropology",
          "History",
          "Myths / Tales / Folklore",
          "Personal Narratives / Biographies",
          "Language / Communication",
          "Narratives / Storytelling",
          "Culture / Identity",
          "Mass Media / Information Society",
          "Connected Life / Social Media",
          "Anti-Consumerism",
          "Hacking / Disruption",
          "Social Issues / Inequality / Activism",
          "Current Affairs / Politics",
          "Gender / Identity",
          "Territories / Geographies",
          "Sustainability" 
        ],
        themesRules: [
          v => !!v || "At least one theme is required*",
        ],
        instagram: "",
        urlRules: [
          // v => !!v || 'A valid .com url is required',
          v => /.+..com+/.test(v) || "Must be valid url"
        ],
        twitter: "",
        linkedin: "",
        website: "",
        websiteRules: [
          // v => !!v || 'A valid url is required',
          v => /.+..+/.test(v) || "Url must be valid"
        ],
        imageName: "",
        imageUrl: "",
        imageFile: "",
        imgUrls: [],
        images: [],
        video1: "",
        video2: "",
        video3: "",
        video4: "",
        videos: [],
        videoRules: [
          //  v => !!v || 'Description is required',
          v =>
            /youtube.com+/.test(v) ||
            /vimeo.com+/.test(v) ||
            " Must be a valid Youtube or Vimeo URL"
        ]

      }
      //  submitted: false
    };
  }, 
  created() {
    this.getImages();
  },
  computed: {
    formIsCorrect: function(){
      if (
          this.studentInfo.firstname !== "" &&
          this.studentInfo.lastname !== "" &&
          this.studentInfo.description !== "" && 
          this.studentInfo.description.length < 450 &&
          this.studentInfo.email !== "" &&
          this.studentInfo.themes1 !== "" &&
          this.studentInfo.discipline1 !== "" &&
          this.studentInfo.images.length > 0
      ) {
        return this.allowSubmit = true;
      }
    }
  },
  methods: {
    post: function() {
      var timestamp = Date.now()
      this.$http
        .post("https://gcd2019-submission-form.firebaseio.com/graduates.json", {
          submitted: timestamp,
          firstname: this.studentInfo.firstname,
          lastname: this.studentInfo.lastname,
          description: this.studentInfo.description,
          disciplines: [this.studentInfo.discipline1, this.studentInfo.discipline2, this.studentInfo.discipline3],
          themes: [this.studentInfo.themes1, this.studentInfo.themes2, this.studentInfo.themes3 ],
          email: this.studentInfo.email,
          instagram: this.studentInfo.instagram,
          twitter: this.studentInfo.twitter,
          linkedin: this.studentInfo.linkedin,
          website: this.studentInfo.website,
          images: this.studentInfo.images,
          videos: [this.studentInfo.video1, this.studentInfo.video2, this.studentInfo.video3, this.studentInfo.video4], 
          userId: this.studentInfo.firstname + "_" + this.studentInfo.lastname
        })
        .then(function(data) {
          console.log(data);
           

          //  this.submitted = true;
        });
    },
    getImages: function() {
      db.collection("images")
        .get()
        .then(snap => {
          const array = [];
          snap.forEach(doc => {
            array.push(doc.data());
          });
          this.studentInfo.imgUrls = array;
        });
      this.studentInfo.imageName = "";
      this.studentInfo.imageFile = "";
      this.studentInfo.imageUrl = "";
    },
    pickFile() {
      this.$refs.image.click();
    },

    onFilePicked(e) {
      const files = Array.from(e.target.files);
                console.log(files);

      console.log('you are here')
      if  (files.length === 0) {
        console.log(files.size);
        return; 
      }
      for (var i = 0; i < files.length; i ++) {
        if (files[i].size > 1200 * 1200)  {
          console.log(files[i].size);
          alert('File is too big. Must be less than 1MB)');
          return;
          }
          else {
            console.log(this);
          // this.upload()
            var file = files[0];
            var ext = file.name.split('.').pop();
            var name = Date.now() + '_' + Math.random().toString().split('.').pop();

            var that = this;

            storage().ref(`uploads/${name}.${ext}`)
              .put(file)
              .then((snapshot) => {
                snapshot.ref.getDownloadURL().then(function(downloadURL) {
                  that.studentInfo.images.push(downloadURL);
                });
              })
              .catch((err) => console.error(err))
            }
        }
      }   
     

    },
    upload() { 
      console.log('trying to start upload');
    },


    //Inactive at the moment
    // upload: function() {
      
    //   // var storageRef = firebase.storage().ref();
    //   // var mountainsRef = storageRef.child(`/${post.studentInfo.imageName}`);
    //   // mountainsRef.put(this.studentInfo.imageFile).then(snapshot => {
    //   //   snapshot.ref.getDownloadURL().then(downloadURL => {
    //   //     this.studentInfo.imageUrl = downloadURL;
    //   //     const bucketName = "gcd2019-submission-form.appspot.com";
    //   //     const filePath = this.studentInfo.imageName;
    //   //     db.collection("images").add({
    //   //       downloadURL,
    //   //       downloadUrl:
    //   //         `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/images` +
    //   //         "%2F" +
    //   //         `${encodeURIComponent(filePath)}?alt=media`,
    //   //       timestamp: Date.now()
    //   //     });
    //   //     this.getImages();
    //   //   });
    //   // });
    //   // //this.getImages();
    // }
  }
// };
</script>
<style>

.v-input__prepend-outer {
    display: none
}


.v-menu__content {
  top: 0!important;
  height: 275px !important;
  min-width: 488px !important;
}

.error--text .v-messages__message {
  color:rgb(255,0,0);
  
}

body {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}
</style>
