FROM continuumio/anaconda3:latest
# Crea un usuario no root
RUN useradd -ms /bin/bash jupyter
# Cambia al usuario creado
USER jupyter
# Directorio de trabajo
WORKDIR /home/jupyter
# Puerto en el que se ejecutará Jupyter Notebook
EXPOSE 8888
# Comando para ejecutar Jupyter Notebook
CMD ["jupyter", "notebook", "--ip=0.0.0.0", "--port=8888"]

# Comando para crear y activar el ambiente de conda posterior iniciar el servidor Jupyter Notebook en base por defecto (funciona creandolo pero no esta seleccionado)
#CMD ["/bin/bash", "-c", "echo ${CONDA_ENV} && conda create -n ${CONDA_ENV} python=2.7 && source activate ${CONDA_ENV} && jupyter notebook --ip=0.0.0.0 --port=8888 --no-browser"]

# Directorio de ambientes 
#RUN conda config --set envs_dirs /home/jupyter/.conda/envs
#RUN chmod -R 777 /home/jupyter/.conda/envs