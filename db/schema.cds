namespace bg;

using {cuid} from '@sap/cds/common';

entity BoardGames : cuid {
  

  name            : String(120);
  price           : Decimal(15, 2);
  players         : String(20);
  playTimeMinutes : Integer;
  ageRating       : String(10);

}
action uploadExcel(file:LargeBinary) returns String;

entity Files : cuid {

  fileNames : String(260);
  fileType  : String      @Core.IsMediaType;
  content   : LargeBinary @Core.MediaType                  : fileType
                          @Core.AcceptableMediaTypes       : ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']
                          @Core.ContentDisposition.Filename: fileNames;
}
