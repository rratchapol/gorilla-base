import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { ProjectComponent } from 'app/modules/admin/dashboards/project/project.component';
import { ProjectService } from 'app/modules/admin/dashboards/project/project.service';
import { ProjectttComponent } from './project.component';

export default [
    {
        path     : '',
        component: ProjectttComponent,
        resolve  : {
            data: () => inject(ProjectService).getData(),
        },
    },
] as Routes;
