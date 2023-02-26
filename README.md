# dentapp
Sistema para gestion de una clinica dental.


# Si da error a la hora de ejecutar el proyecto en mac
    - Debe incluir la variable de entorno en el sistema
    ```php
        To use the XAMPP PHP and other binaries found in /Applications/XAMPP/bin/ add the following to the appropriate ~/.zshrc or ~/.bash_profile file depending on your default shell (see note below).

        export XAMPP_HOME=/Applications/XAMPP
        export PATH=${XAMPP_HOME}/bin:${PATH}
        export PATH
        Reload the current login shell to apply the changes (won't be needed next time you open a shell session):

        $ exec $SHELL -l;
        Confirm:

        $ which php
        /Applications/XAMPP/bin/php
    ```
# Regenerar el key en laravel
    - ```php artisan key:generate```
# Si da problema de permisos ejecutar:
    -   sudo chmod -R 777 storage/
    -   sudo chmod -R 777 bootstrap/cache/