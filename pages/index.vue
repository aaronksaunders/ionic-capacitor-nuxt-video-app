<template>
  <IonPage>
    <IonHeader :translucent="true">
      <IonToolbar>
        <IonTitle>Home</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent class="ion-padding">
      <h1>WELCOME HOME on IOS AND ANDROID</h1>
      <IonButton @click="router.push('/about')">
        Goto About Page
      </IonButton>
      <IonButton @click.prevent="doSignOut">
        SIGN OUT
      </IonButton>
      <p>
        {{user}}
      </p>
    </IonContent>
  </IonPage>
</template>
<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonButton
} from "@ionic/vue"

definePageMeta({
  middleware: ["auth"]
})

const router = useRouter();
const client = useSupabase()

const user = client.auth.user();

// function 
const doSignOut = async () => {
  await client.auth.signOut();
  router.replace("/login");
}


</script>