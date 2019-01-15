<template>
  <v-list
    :key="header"
    dense
    two-line
    subheader>

    <v-subheader>{{ $t('sidebar.header.'+header) }}</v-subheader>
    <v-list-tile 
      v-for="value in values"
      :key="value.name"
      :href="transformLink(value.link)">
      <v-list-tile-action>
        <v-icon v-text="$vuetify.icons[value.icon]"/>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{ $t('sidebar.'+header+'.'+value.name) }}</v-list-tile-title>
        <v-list-tile-sub-title>{{ $t('sidebar.'+header+'.'+value.name+'Description') }}</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      default: ''
    },
    values: {
      type: Array,
      default: () => []
    }
  }
}
</script>
