<template>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <paper-table :title="table1.title" :sub-title="table1.subTitle" :data="table1.data" :columns="table1.columns">

          </paper-table>
        </div>
      </div>

      <div class="col-md-12">
        <div class="card card-plain">
          <paper-table type="hover" :title="table2.title" :sub-title="table2.subTitle" :data="table2.data" :columns="table2.columns">

          </paper-table>
        </div>
      </div>

    </div>
</template>
<script>
  import PaperTable from 'components/UIComponents/PaperTable.vue'
  import Language from 'src/localize.js'

  const tableColumns = ['Id', 'Name', 'Salary', 'Country', 'City']
  const tableData = {
    eng: [
      {
        id: 1,
        name: 'Dakota Rice',
        salary: '$36.738',
        country: 'Niger',
        city: 'Oud-Turnhout'
      },
      {
        id: 2,
        name: 'Minerva Hooper',
        salary: '$23,789',
        country: 'Curaçao',
        city: 'Sinaai-Waas'
      },
      {
        id: 3,
        name: 'Sage Rodriguez',
        salary: '$56,142',
        country: 'Netherlands',
        city: 'Baileux'
      },
      {
        id: 4,
        name: 'Philip Chaney',
        salary: '$38,735',
        country: 'Korea, South',
        city: 'Overland Park'
      },
      {
        id: 5,
        name: 'Doris Greene',
        salary: '$63,542',
        country: 'Malawi',
        city: 'Feldkirchen in Kärnten'
      }
    ],
    kor: [
      {
        id: 1,
        name: 'Dakota Rice',
        salary: '$36.738',
        country: 'Niger',
        city: 'Oud-Turnhout'
      },
      {
        id: 2,
        name: 'Minerva Hooper',
        salary: '$23,789',
        country: 'Curaçao',
        city: 'Sinaai-Waas'
      },
      {
        id: 3,
        name: 'Sage Rodriguez',
        salary: '$56,142',
        country: 'Netherlands',
        city: 'Baileux'
      },
      {
        id: 4,
        name: 'Philip Chaney',
        salary: '$38,735',
        country: 'Korea, South',
        city: 'Overland Park'
      },
      {
        id: 5,
        name: 'Doris Greene',
        salary: '$63,542',
        country: 'Malawi',
        city: 'Feldkirchen in Kärnten'
      }
    ]
  }
  export default {
    components: {
      PaperTable
    },
    data () {
      return {
        table1: {
          title: Language('tablelist', 'tableA_title'),
          subTitle: Language('tablelist', 'tableA_subtitle'),
          columns: [...tableColumns],
          data: [...tableData[Language(null, null, 'location')]]
        },
        table2: {
          title: Language('tablelist', 'tableB_title'),
          subTitle: Language('tablelist', 'tableB_subtitle'),
          columns: [...tableColumns],
          data: [...tableData[Language(null, null, 'location')]]
        }
      }
    }
  }

</script>
<style>

</style>
