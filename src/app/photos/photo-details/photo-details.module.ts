import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { PhotoDetailsComponent } from "./photo-details.component";
import { PhotoModule } from "../photo/photo.module";
import { PhotoCommentsComponent } from "./photo-comments/photo-comments.component";
import { VMessageModule } from "../../shared/components/vmessage/vmessage.module";
import { PhotoOwnerOnlyDirective } from "./photo-owner-only/photo-owner-only.directive";
import { LoggedOnlyModule } from "src/app/shared/directives/logged-only/logged-only.module";

@NgModule({
    declarations: [PhotoDetailsComponent, PhotoCommentsComponent, PhotoOwnerOnlyDirective],
    imports: [CommonModule, PhotoModule, RouterModule, ReactiveFormsModule, VMessageModule, LoggedOnlyModule],
    exports: [PhotoDetailsComponent, PhotoCommentsComponent]
})

export class PhotoDetailsModule{}